import fs from 'fs';

const file = './log.json'

export function editLog(toAdd, callback) {
  const data = fs.readFileSync(file, 'utf-8')
  const json = JSON.parse(data.toString())
  const newCount = Number(toAdd) + Number(json.count)

  callback(newCount)

  fs.writeFile(file, JSON.stringify({count: newCount}), null, () => {})
}
