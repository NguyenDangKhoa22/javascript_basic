const cars = [
    {
      brand: 'Toyota',
      model: 'Camry',
      year: 2022
    },
    {
      brand: 'Honda',
      model: 'Accord',
      year: 2021
    },
    {
      brand: 'Ford',
      model: 'Mustang',
      year: 2023
    },
    {
      brand: 'Chevrolet',
      model: 'Camaro',
      year: 2022
    },
    {
      brand: 'Nissan',
      model: 'Altima',
      year: 2023
    }
  ];
  const sortNe = (cars = [])=>{
    cars.sort((a,b) => {
      const idA = a.brand.toUpperCase();
      const idB = b.brand.toUpperCase();
      return idA.localeCompare(idB);
    })
    return cars;
   }
   const sortModel = (cars = [])=>{
    cars.sort((a,b) => {
      const idA = a.model.toUpperCase();
      const idB = b.model.toUpperCase();
      return idA.localeCompare(idB);
    })
    return cars;
   }
   const sortYear = (cars = [])=>{
    cars.sort((a,b) =>a.year - b.year);
    return cars; 
  }
  console.log(sortYear(cars))