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
  const departaments = {}
  const result =[]
  Object.entries(obj).forEach(([key, value]) => {
    if (typeof value === "object" && value !== null) {
        
       structureObject(value)
       
    }
    else{
      result.push({
          "city":key,
          "airports":value
      })
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
  structureObject(conteo)
 

  return[]

}