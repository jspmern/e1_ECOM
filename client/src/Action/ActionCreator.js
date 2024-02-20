import { ERROR, FETCHED_DATA, LOADING, SINGLE_ERROR, SINGLE_FETCHED_PRODUCT, SINGLE_LOADING } from "./ActionType";

//this is for inital api request
export function initalData()
{
    return {type:LOADING}
}
//this is for fetching the data
export function fetchedData(data)
{
    return {type:FETCHED_DATA,payload:data}
}
//this is for fetching the data
export function singleFetchedProduct(data)
{
    return {type:SINGLE_FETCHED_PRODUCT,payload:data}
}
//this is for fetching the data
export function singleloading()
{
    return {type:SINGLE_LOADING }
}
//this is for fetching the data
export function singlError(err)
{
    return {type:SINGLE_ERROR,payload:err}
}
//this is for the error handling while api hitting
export function errorWhileProductApi(err)
{
    return {type:ERROR,payload:err}
}