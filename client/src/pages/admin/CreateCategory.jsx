import React from "react";
import Layout from "../../components/Layout/Layout";
import AdminDashboardMenu from "../../components/AdminDashboardMenu";
import useCategory from "../../hook/useCategory";

function CreateCategory() {
  let categories = useCategory();
  console.log(categories);

  return (
    <Layout title={"Create Category -Ecomm"}>
      <div className="container">
        <h1 className="text-center mt-3 mb-2">Admin Dashboard</h1>
        <div className="row">
          <div className="col-md-3">
            <AdminDashboardMenu />
          </div>
          <div className="col-md-9">
            <h6 className="text-center m-3">Manage Category</h6>
            <hr />
            {categories.length == 0 && <h1>loding....</h1>}
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">NAME</th>
                  <th scope="col">ACTION</th>
                </tr>
              </thead>
              <tbody>
              {categories.length > 0 && (
              <>
                {categories?.map((item,i) => {
                    let {_id,name,slug}=item
                  return <>
                      <tr key={i}>
                   
                   <td>{name}</td>
                   <td>
                     <button className="btn btn-primary">edit</button>
                     <button className="btn btn-danger">delete</button>
                   </td>
                   
                 </tr>
                  </>;
                })}
              </>
            )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CreateCategory;
