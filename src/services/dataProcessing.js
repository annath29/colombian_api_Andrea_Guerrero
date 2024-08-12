export const presidentsByPoliticalParty =  (obj) => {
    const countByPoliticalParty = {};

    obj.forEach(item => {
        const politicalParty = item.politicalParty.toLowerCase();
        if (countByPoliticalParty[politicalParty]) {
          countByPoliticalParty[politicalParty]++;
        } else {
          countByPoliticalParty[politicalParty] = 1;
        }
      });
      const result =[]

      Object.keys(countByPoliticalParty).forEach(key => {
        result.push(
            {
                "politicalParty": key,
                "presidents":countByPoliticalParty[key]
            }
        )
      });    
      const sortedResult = result.sort((a, b) => b.presidents - a.presidents );
      
      return [sortedResult]
}

const structureObject = (obj) =>{
  console.log("elobject",obj)
  const result
  Object.entries(obj).forEach(([key, value]) => {
    console.log("departament")
    if (typeof value === "object" && value !== null) {
        console.log(key)
       structureObject(value)
       result.push({
        
        
       })
    }
    else{
    console.log("key", key,":",value)

    }
  })
}

export const airportByDepartmentAndCity = (obj) =>{
  const conteo = {};

  obj.forEach(item => {
    const deptName = item.department.name;
    const cityName = item.city.name;

    if (!conteo[deptName]) {
      conteo[deptName] = {};
    }

    if (!conteo[deptName][cityName]) {
      conteo[deptName][cityName] = 0;
    }
  
    conteo[deptName][cityName]++;
  });
  const result = []
  // console.log("obj",conteo);
 
  structureObject(conteo)
 

  return[]

}