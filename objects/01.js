function union(arr1, arr2) {
    const arr3 = [];
    for(let i = 0; i< arr1.length;i++)
    {
       arr3.push(arr1[i]);
    }
    console.log(arr3); 
    for(let i = 0; i< arr2.length;i++)
    {
      if(arr2[i].includes(arr3[i]))
      {
        return 1;
      }else
      {
        arr3.push(arr2[i]);
      }
    }
    console.log(arr3);
}
union([2,5,3,6],[1,2,3,7]);