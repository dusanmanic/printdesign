// service firebase.storage {
//     match /b/{bucket}/o {
//       match /{allPaths=**} {
//         allow read, write: if request.auth != null;
//       }
//     }
//   }

/*
// Create a root reference
var storageRef = firebase.storage().ref();

// Create a reference to 'mountains.jpg'
var mountainsRef = storageRef.child('mountains.jpg');

// Create a reference to 'images/mountains.jpg'
var mountainImagesRef = storageRef.child('images/mountains.jpg');

// While the file names are the same, the references point to different files
mountainsRef.name === mountainImagesRef.name            // true
mountainsRef.fullPath === mountainImagesRef.fullPath    // false
*/

/*
db.collection('print_design')
.get()
.then(snapshot => {
    if(!snapshot.empty) {
        let allDocuments = snapshot.docs
        
        allDocuments.forEach(doc => {
            let data = doc.data()
            console.log(data)
            console.log(data.test)
        })
    } else {
        console.log(`nesto ne radi`)
    }

})
*/



export function showImages(kategorija) {
  let storageRef = storage.ref()
  // let listRef = storageRef.child('images')
  let listRefVizitke = storageRef.child(`images/${kategorija}`)

  let counter = 0;

  // Find all the prefixes and items.
  listRefVizitke.listAll().then(function(res) {
      res.prefixes.forEach(function(folderRef) {
        // All the prefixes under listRef.
        // You may call listAll() recursively on them.
        console.log(`uslo ovde`)
        folderRef.listAll().then(test => {
            let items = test.items
            console.log(items)
            items.forEach(item => {
                item.getDownloadURL().then(item => {
                  let divSlike = document.querySelector('.slike')
                  let img = document.createElement('img')
                  img.setAttribute('src', item)
                  divSlike.appendChild(img)
                })
            })
        })
        
      });
      res.items.forEach(function(itemRefVizitke) {
        // All the items under listRef.
        console.log(`uslo ovde 2`)
        itemRefVizitke.getDownloadURL().then(item => {
          let divSlike = document.querySelector('.slike')
          let img = document.createElement('img')
          img.setAttribute('src', item)
          img.setAttribute('class', 'slikeAlbum')
          divSlike.appendChild(img)
          img.addEventListener('click', event => {
              let divVizitke = document.getElementById(`slikePozicija`)
              counter++
              let clickImageUrl = event.target.currentSrc

              // console.log(event.target.currentSrc)
              // console.log(event.target.id)
              // console.log(counter)
              
              if(counter === 1) {
                  divVizitke.style.display = 'none'
                  let klikSlika = document.createElement('img')
                  let popUp = document.getElementById('popUp')
                  popUp.style.display = 'flex'
                  console.log(clickImageUrl)
                  klikSlika.setAttribute('src', clickImageUrl)
                  klikSlika.setAttribute('class', 'slikaVeca')
                  popUp.appendChild(klikSlika)

                  klikSlika.addEventListener('click', event => {
                      counter++
                      if(counter === 2) {
                          popUp.innerText = ""
                          popUp.style.display = 'none'
                          divVizitke.style.display = ""
                          counter = 0
                      }   
                  })
            }
          })
        })
      });
    }).catch(function(error) {
      // Uh-oh, an error occurred!
    });
}


/*
  // Find all the prefixes and items.
listRefVizitke.listAll().then(function(res) {
    res.prefixes.forEach(function(folderRef) {
      // All the prefixes under listRef.
      // You may call listAll() recursively on them.
      
    });
    res.items.forEach(function(itemRefVizitke) {
      // All the items under listRef.

    });
  }).catch(function(error) {
    // Uh-oh, an error occurred!
  });
*/
