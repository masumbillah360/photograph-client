import React from "react";
import { Table } from "react-bootstrap";
import useTitle from "../../hooks/useTitle";

const BlogPage = () => {
  useTitle("Blog");
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
            JWT, or JSON Web Token, is an open standard used to share security
            information between two parties — a client and a server. Each JWT
            contains encoded JSON objects, including a set of claims. JWTs are
            signed using a cryptographic algorithm to ensure that the claims
            cannot be altered after the token is issued.
          </p>
          <p className="lead">
            JWTs differ from other web tokens in that they contain a set of
            claims. Claims are used to transmit information between two parties.
            What these claims are depends on the use case at hand. For example,
            a claim may assert who issued the token, how long it is valid for,
            or what permissions the client has been granted. <br />A JWT is a
            string made up of three parts, separated by dots (.), and serialized
            using base64. In the most common serialization format, compact
            serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
            <br />
            Once decoded, you will get two JSON strings: <br />
          </p>
          <li>The header and the payload.</li>
          <li>The signature.</li>
          <p>
            The JOSE (JSON Object Signing and Encryption) header contains the
            type of token — JWT in this case — and the signing algorithm.
          </p>
          <p>
            The payload contains the claims. This is displayed as a JSON string,
            usually containing no more than a dozen fields to keep the JWT
            compact. This information is typically used by the server to verify
            that the user has permission to perform the action they are
            requesting.
          </p>
          <p>
            There are no mandatory claims for a JWT, but overlaying standards
            may make claims mandatory. For example, when using JWT as bearer
            access token under OAuth2.0, iss, sub, aud, and exp must be present.
            some are more common than others. The signature ensures that the
            token hasn't been altered. The party that creates the JWT signs the
            header and payload with a secret that is known to both the issuer
            and receiver, or with a private key known only to the sender. When
            the token is used, the receiving party verifies that the header and
            payload match the signature.
          </p>
          <p>
            JWT Example: OAuth Bearer Tokens A common way to use JWTs is as
            OAuth bearer tokens. In this example, an authorization server
            creates a JWT at the request of a client and signs it so that it
            cannot be altered by any other party. The client will then send this
            JWT with its request to a REST API. The REST API will verify that
            the JWT’s signature matches its payload and header to determine that
            the JWT is valid. When the REST API has verified the JWT, it can use
            the claims to either grant or deny the client’s request. In simpler
            terms, you can think of a JWT bearer token as an identity badge to
            get into a secured building. The badge comes with special
            permissions (the claims); that is, it may grant access to only
            select areas of the building. The authorization server in this
            analogy is the reception desk — or the issuer of the badge. And to
            verify that the badge is valid, the company logo is printed on it,
            similar to the signature of the JWT. If the badge holder attempts to
            access a restricted area, the permissions on the badge determine
            whether or not they can access the area, similar to the claims in a
            JWT.
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
            <span>NodeJS:</span>NodeJS is a cross-platform and opensource
            Javascript runtime environment that allows the javascript to be run
            on the server-side. Nodejs allows Javascript code to run outside the
            browser. Nodejs comes with a lot of modules and mostly used in web
            development.
          </p>
          <p className="lead">
            <span>Javascript: </span>Javascript is a Scripting language. It is
            mostly abbreviated as JS. It can be said that Javascript is the
            updated version of the ECMA script. Javascript is a high-level
            programming language that uses the concept of Oops but it is based
            on prototype inheritance.
          </p>
          <Table striped bordered hover>
            <thead>
              <tr className="text-center">
                <th>Javascript</th>
                <th>Node JS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Javascript is a programming language that is used for writing
                  scripts on the website.
                </td>
                <td>NodeJS is a Javascript runtime environment.</td>
              </tr>
              <tr>
                <td>Javascript can only be run in the browsers. </td>
                <td>
                  We can run Javascript outside the browser with the help of
                  NodeJS.
                </td>
              </tr>
              <tr>
                <td>It is basically used on the client-side. </td>
                <td>It is mostly used on the server-side.</td>
              </tr>
              <tr>
                <td>
                  Javascript is capable enough to add HTML and play with the
                  DOM.
                </td>
                <td>Nodejs does not have capability to add HTML tags.</td>
              </tr>
              <tr>
                <td>
                  Javascript can run in any browser engine as like JS core in
                  safari and Spidermonkey in Firefox.
                </td>
                <td>
                  V8 is the Javascript engine inside of node.js that parses and
                  runs Javascript.
                </td>
              </tr>
              <tr>
                <td>Javascript is used in frontend development. </td>
                <td>Nodejs is used in server-side development.</td>
              </tr>
              <tr>
                <td>
                  Some of the javascript frameworks are RamdaJS, TypedJS, etc.
                </td>
                <td>
                  Some of the Nodejs modules are Lodash, express etc. These
                  modules are to be imported from npm.
                </td>
              </tr>
              <tr>
                <td>
                  It is the upgraded version of ECMA script that uses Chrome’s
                  V8 engine written in C++.
                </td>
                <td>Nodejs is written in C, C++ and Javascript.</td>
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
            How does NodeJS handle multiple requests at the same time?
          </h2>
          <p className="lead">
            NodeJS receives multiple client requests and places them into
            EventQueue. NodeJS is built with the concept of event-driven
            architecture. NodeJS has its own EventLoop which is an infinite loop
            that receives requests and processes them. EventLoop is the listener
            for the EventQueue. If NodeJS can process the request without I/O
            blocking then the event loop would itself process the request and
            sends the response back to the client by itself. But, it is possible
            to process multiple requests parallelly using the NodeJS cluster
            module or worker_threads module.
          </p>
        </div>
        <div className="col-md-4 order-md-1"></div>
      </div>

      <hr className="featurette-divider" />
    </div>
  );
};

export default BlogPage;
