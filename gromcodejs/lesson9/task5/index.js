const getPeople = (obj) => {
    return Object.values(obj).flat(Infinity).map(room => {
      return room.name ? room.name : [];
    })
  }