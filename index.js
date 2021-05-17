const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    /*each: function(collection, callback) {
           if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        let a = collection[i]
        callback(a, i, collection)
      }
    }
    else {
       let keys = Object.keys(collection)
      for (let i = 0; i < keys.length; i++) {
        let k = keys[i]
        let v = collection[k]
        callback(v, k, collection)
      }
    }
    return collection 
  },
     

    map: function(collection, callback) {
      let newCollection = []
      if (Array.isArray(collection)) {
          for (let i = 0; i < collection.length; i++) {
        let a = collection[i]
        newCollection.push(callback(a, i, collection)) 
      }
    }
      else {
       let keys = Object.keys(collection)
      for (let i = 0; i < keys.length; i++) {
        let k = keys[i]
        let v = collection[k]
        newCollection.push(callback(v, k, collection))
      }
    }
      return newCollection 
    },
*/

each: function(collection, callback) {
      const newCollection = Array.isArray(collection) ? collection.slice() : Object.values(collection)

      for (let i = 0; i < newCollection.length; i++)
        callback(newCollection[i])

      return collection
    },

    map: function(collection, callback) {
      if (!Array.isArray(collection)) collection = Object.values(collection)

      const newArray = []

      for (let i = 0; i < collection.length; i++)
        newArray.push(callback(collection[i]))

      return newArray
    },
    reduce: function(collection, callback, acc) {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
