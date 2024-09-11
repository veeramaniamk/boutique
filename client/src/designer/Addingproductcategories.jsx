import React from "react";
import { Tab, Nav } from "react-bootstrap";

const Addingproductlistsdropdown = () => {
  
  const category = [
    { id: 1, category: 'cotton', gender: "male"},
    { id: 2, category: 'silk', gender: "female" },
  ];

  const assortment = [
    { id: 1, assortment: 'cotton', gender: "male"},
    { id: 2, assortment: 'silk', gender: "female" },
  ];

  const gender = [
    { id: 1, gender: 'male'},
    { id: 2, gender: 'female'},
  ];

  const handleDelete = (id) => {
    console.log(`Deleted item with ID: ${id}`);
  };

  const handleUpdate = (id) => {
    console.log(`Updated item with ID: ${id}`);
  };

  return (
    <section className="add-sec-produ">
      <div className="container">
        <div className="row">
          <Tab.Container defaultActiveKey="tab1">
            <Nav variant="tabs">
              <Nav.Item>
                <Nav.Link className="categ-tab" eventKey="tab1">Add Category</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="categ-tab" eventKey="tab2">Product Assortment</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="categ-tab" eventKey="tab3">Gender</Nav.Link>
              </Nav.Item>
            </Nav>

            <Tab.Content className="mt-3">
              {/* Category Tab */}
              <Tab.Pane eventKey="tab1">
                <div className="aadingg-product">
                  <button className="ad-producct" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                    Add Categories +
                  </button>

                  <div className="offcanvas offcanvas-end canva-categori" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div className="offcanvas-header">
                      <h3 className="duct-add">Add Categories</h3>
                      <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                      <form>
                        <input type="text" className="inp-add-prdut" placeholder="name" />
                        <input type="text" className="inp-add-prdut" placeholder="price" />
                        <button className="product-submit">Submit</button>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="table-container">
                  <table className="table table-bordered">
                    <thead className="thead-dark">
                      <tr>
                        <th>ID</th>
                        <th>Category</th>
                        <th>Gender</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {category.map((item) => (
                        <tr key={item.id}>
                          <td>{item.id}</td>
                          <td>{item.category}</td>
                          <td>{item.gender}</td>
                          <td>
                            <button 
                              onClick={() => handleUpdate(item.id)} 
                              className="btn btn-sm btn-primary me-2">
                              <i className="bi bi-pencil"></i>
                            </button>
                            <button 
                              onClick={() => handleDelete(item.id)} 
                              className="btn btn-sm btn-danger">
                              <i className="bi bi-trash"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Tab.Pane>

              {/* Assortment Tab */}
              <Tab.Pane eventKey="tab2">
                <div className="aadingg-product">
                  <button className="ad-producct" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                    Add Assortment +
                  </button>

                  <div className="offcanvas offcanvas-end canva-categori" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div className="offcanvas-header">
                      <h3 className="duct-add">Add Assortment</h3>
                      <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                      <form>
                        <input type="text" className="inp-add-prdut" placeholder="name" />
                        <input type="text" className="inp-add-prdut" placeholder="price" />
                        <button className="product-submit">Submit</button>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="table-container">
                  <table className="table table-bordered">
                    <thead className="thead-dark">
                      <tr>
                        <th>ID</th>
                        <th>Assortment</th>
                        <th>Gender</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {assortment.map((item) => (
                        <tr key={item.id}>
                          <td>{item.id}</td>
                          <td>{item.assortment}</td>
                          <td>{item.gender}</td>
                          <td>
                            <button 
                              onClick={() => handleUpdate(item.id)} 
                              className="btn btn-sm btn-primary me-2">
                              <i className="bi bi-pencil"></i>
                            </button>
                            <button 
                              onClick={() => handleDelete(item.id)} 
                              className="btn btn-sm btn-danger">
                              <i className="bi bi-trash"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Tab.Pane>

              {/* Gender Tab */}
              <Tab.Pane eventKey="tab3">
                <div className="aadingg-product">
                  <button className="ad-producct" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                    Add Gender +
                  </button>

                  <div className="offcanvas offcanvas-end canva-categori" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div className="offcanvas-header">
                      <h3 className="duct-add">Add Gender</h3>
                      <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                      <form>
                        <input type="text" className="inp-add-prdut" placeholder="name" />
                        <input type="text" className="inp-add-prdut" placeholder="price" />
                        <button className="product-submit">Submit</button>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="table-container">
                  <table className="table table-bordered">
                    <thead className="thead-dark">
                      <tr>
                        <th>ID</th>
                        <th>Gender</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {gender.map((item) => (
                        <tr key={item.id}>
                          <td>{item.id}</td>
                          <td>{item.gender}</td>
                          <td>
                            <button 
                              onClick={() => handleUpdate(item.id)} 
                              className="btn btn-sm btn-primary me-2">
                              <i className="bi bi-pencil"></i>
                            </button>
                            <button 
                              onClick={() => handleDelete(item.id)} 
                              className="btn btn-sm btn-danger">
                              <i className="bi bi-trash"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Tab.Pane>

            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
    </section>
  );
};

export default Addingproductlistsdropdown;
