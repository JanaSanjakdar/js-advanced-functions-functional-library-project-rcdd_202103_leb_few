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
    
    find: function(collection, query) {
      for (let i = 0; i < collection.length; i++) {
        const element = collection[i];
        if (query(element)) {
          return element
        }
      }
    },
    
    
    filter: function(collection, query) {
      const results = []
      for (let i = 0; i < collection.length; i++) {
        const element = collection[i];
        if (query(element)) {
          results.push(element)
        }
      }
      return results
    },
    
    size: function(collection) {
      let count = 0;

      if (Array.isArray(collection)) {
        let i = 0;
        while (collection[i] !== undefined) {
          i++; count++;
        }
      } else {
        let keys = Object.keys(collection)
        let keyIndex = 0;
        while (collection[keys[keyIndex]] !== undefined) {
          keyIndex++; count++;
        }
      }
      return count
    },
    
      first: function(array, n=0) {
      let result = []
      for (let i = 0; i < n; i++) {
        const element = array[i];
        result.push(element)
      }
      return (n === 0) ? array[0] : result
    },

    last: function(array, n=0) {
      let result = []
      let loop = 0
      let i = array.length - 1
      while (loop < n) {
        const element = array[i]
        result.unshift(element)
        loop++; i--;
      }
      return (n === 0) ? array.slice(-1)[0] : result
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
