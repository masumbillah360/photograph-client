import React, { useContext } from "react";
import { Table } from "react-bootstrap";
import { TitleContext } from "../../context/TitleContext/TitleContext";

const BlogPage = () => {
  const { setTitle } = useContext(TitleContext);
  setTitle("Blog");
  return (
    <div>
      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-8">
          <h2 className="featurette-heading fw-normal lh-1">
            Difference between SQL and NoSQL
          </h2>
          <p className="lead">
            <span className="fw-bold">SQL</span> databases are primarily called
            as Relational Databases (RDBMS) <br />
            whereas <span className="fw-bold">NoSQL</span> database are
            primarily called as non-relational or distributed database.
          </p>
          <Table striped bordered hover>
            <thead>
              <tr className="text-center">
                <th>SQL</th>
                <th>No SQL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS) </td>
                <td>Non-relational or distributed database system.</td>
              </tr>
              <tr>
                <td>
                  These databases have fixed or static or predefined schema{" "}
                </td>
                <td>They have dynamic schema</td>
              </tr>
              <tr>
                <td>
                  These databases are not suited for hierarchical data storage.{" "}
                </td>
                <td>
                  These databases are best suited for hierarchical data storage.
                </td>
              </tr>
              <tr>
                <td>These databases are best suited for complex queries </td>
                <td>These databases are not so good for complex queries</td>
              </tr>
              <tr>
                <td>Vertically Scalable </td>
                <td>Horizontally scalable</td>
              </tr>
              <tr>
                <td>Follows ACID property </td>
                <td>
                  Follows CAP(consistency, availability, partition tolerance)
                </td>
              </tr>
              <tr>
                <td>
                  <span className="fw-bold">Examples:</span> MySQL, PostgreSQL,
                  Oracle, MS-SQL Server etc{" "}
                </td>
                <td>
                  <span className="fw-bold">Examples:</span> MongoDB, GraphQL,
                  HBase, Neo4j, Cassandra etc
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="col-md-4"></div>
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-8 order-md-2">
          <h2 className="featurette-heading fw-normal lh-1">
            What is JWT, and how does it work?
          </h2>
          <p className="lead">
            Another featurette? Of course. More placeholder content here to give
            you an idea of how this layout would work with some actual
            real-world content in place.
          </p>
        </div>
        <div className="col-md-4 order-md-1"></div>
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-8">
          <h2 className="featurette-heading fw-normal lh-1">
            What is the difference between javascript and NodeJS?
          </h2>
          <p className="lead">
            And yes, this is the last block of representative placeholder
            content. Again, not really intended to be actually read, simply here
            to give you a better view of what this would look like with some
            actual content. Your content.
          </p>
        </div>
        <div className="col-md-4"></div>
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-8 order-md-2">
          <h2 className="featurette-heading fw-normal lh-1">
            How does NodeJS handle multiple requests at the same time?
          </h2>
          <p className="lead">
            Another featurette? Of course. More placeholder content here to give
            you an idea of how this layout would work with some actual
            real-world content in place.
          </p>
        </div>
        <div className="col-md-4 order-md-1"></div>
      </div>

      <hr className="featurette-divider" />
    </div>
  );
};

export default BlogPage;
