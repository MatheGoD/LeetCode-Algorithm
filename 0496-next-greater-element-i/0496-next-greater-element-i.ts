function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    return nums1.map((el) => {
        for(let i = (nums2.indexOf(el)) ; i < nums2.length ; i++){
          if(nums2[i+1] > el){
            return nums2[i+1]
          } 
        } return -1
    })
};