import { promisify } from 'util';
import { exec as execAsync } from 'child_process';
import { tmpdir } from 'os';

const exec = promisify(execAsync);

const getFile = path => async (req, res) => {
  const destFile = `${tmpdir()}${path}/${req.query.file}`;
  const srcFile = `s3://impact-files${path}/${req.query.file}`;
  try {
    await exec(`s3cmd get --force ${srcFile} ${destFile}`);
    res.download(destFile);
  } catch (e) {
    res.sendStatus(404);
  }
};

const putFile = (path, mode) => async (req, res) => {
  const { subfolder } = req.body;
  const { mimetype, originalname, path: tmpPath } = req.file;
  try {
    await exec(
      `s3cmd ${mode} --mime-type=${mimetype} put ${tmpPath} s3://impact-files${path}/${subfolder}/${originalname}`,
    );
    res.sendStatus(200);
  } catch (e) {
    res.sendStatus(500);
  }
};

export { getFile, putFile };
