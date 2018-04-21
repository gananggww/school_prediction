const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, '../../data_nilai.csv');

const get_data_nilai = (req, res) => {
  fs.readFile(filePath, 'utf8', (error, data) => {
    if(error) {
      console.log(error)
    } else {
      let data_arr = data.split('\n')
      let data_arr2 = []

      for (var i = 0; i < data_arr.length; i++) {
        let content = data_arr[i].split(",")
        data_arr2.push(content)
      }

      let data_json = []
      for (var i = 1; i < data_arr2.length; i++) {
        let obj = {}
        for (var j = 0; j < data_arr2[0].length; j++) {
          obj[data_arr2[0][j]] = data_arr2[i][j]
        }
        data_json.push(obj)
      }

      res.send(data_json)
    }
  })
}


module.exports = {
  get_data_nilai,
}
