var pdf = require('pdf-creator-node')
var fs = require('fs')
var html = fs.readFileSync('template.html', 'utf8')

const createPdf = ({ users, activity, story }) => {
  var options = {
    format: 'A3',
    orientation: 'portrait',
    border: '10mm',
    header: {
      height: '45mm',
      contents: '<div style="text-align: center;">Author: Shyam Hajare</div>'
    },
    footer: {
      height: '28mm',
      contents: {
        first: 'Cover page',
        2: 'Second page', // Any page number is working. 1-based index
        default:
          '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
        last: 'Last Page'
      }
    }
  }

  // var users = [
  //   {
  //     name: 'Shyam',
  //     age: '26',
  //     class: '10th'
  //   }
  // ]

  // var activity = [
  //   {
  //     activity1: '10',
  //     activity2: '6',
  //     activity3: '4'
  //   }
  // ]

  // var story = [
  //   {
  //     story1: '10',
  //     story2: '6',
  //     story3: '4'
  //   }
  // ]

  var document = {
    html: html,
    data: {
      users: users,
      activity: activity,
      story: story
    },
    path: './output.pdf',
    type: ''
  }

  pdf
    .create(document, options)
    .then((res) => {
      console.log(res)
    })
    .catch((error) => {
      console.error(error)
    })
}

export default createPdf
