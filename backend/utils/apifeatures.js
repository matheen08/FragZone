class ApiFeatures{
    constructor(query,queryStr)
    {
        this.query = query;
        this.queryStr = queryStr;
    }
    // searching Products 
    search() 
    {
        const keyword = this.queryStr.keyword 
        ? {
            name:{
                $regex:this.queryStr.keyword, // regular exp of mongodb
                $options:"i",   // i indicates Case Insensitive
            },
        }
        :{};
        console.log(keyword);
        this.query = this.query.find({...keyword});
        return this;
    }

    //filter by category
    filter()
    {
         const queryCopy = {...this.queryStr} //spread operator is used to make a copy of reference type
        // remove some fields
         const removeFields = ["keyword","page","limit"];
         removeFields.forEach((key)=>delete queryCopy[key]);

         // filter for price and rating 
         let queryStr = JSON.stringify(queryCopy);
         queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g,(key)=> `$${key}`);
         

        this.query = this.query.find(JSON.parse(queryStr));
        return this;
    }

    Pagination(resultPerPage)
    {
        const currentPage = Number(this.queryStr.page) || 1;
        const skip = resultPerPage * (currentPage - 1);
        this.query = this.query.limit(resultPerPage).skip(skip);
        return this;

    }

}
module.exports = ApiFeatures;