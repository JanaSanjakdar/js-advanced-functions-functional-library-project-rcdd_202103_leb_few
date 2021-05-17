const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

  
    each: function(collection, callback) {
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          const element = collection[i];
          callback(element, i, collection)
        }
      } else {
        for (const key in collection) {
          const value = collection[key];
          callback(value, key, collection)
        }
      }
      return collection
    },

    map: function(collection, callback) {
      const resultCollection = []
      this.each(collection, (value, keyOrIndex)=>{
        resultCollection.push(callback(value, keyOrIndex, collection))
      })
      return resultCollection
    },
    reduce: function(collection, callback, acc=null) {
      if (acc) {
        for (let i = 0; i < collection.length; i++) {
          const element = collection[i];
          acc = callback(acc, element, collection)
        }
      } else {
        acc = collection[0]
        for (let i = 1; i < collection.length; i++) {
          const element = collection[i];
          acc = callback(acc, element, collection)
        }
      }
      return acc
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
