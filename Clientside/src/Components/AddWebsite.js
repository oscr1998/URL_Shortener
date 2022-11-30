import { useState, useEffect } from "react";
import { ListGroup, Card, Button, Form } from "react-bootstrap";
import API from "../API";

const AddWebsite = ({ onAdd }) => {
  const [orignalUrl, setOrignialUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [websites, setWebsites] = useState([]);
  const [siteId, setSiteId] = useState(null);

  useEffect(() => {
    refreshWebsites();
  }, []);

  const refreshWebsites = () => {
    API.get("/")
      .then((res) => {
        setWebsites(res.data);
      })
      .catch(console.error);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let item = { orignalUrl, shortUrl };
    API.post("/", item).then(() => refreshWebsites());
  };

  const onUpdate = (id) => {
    let item = { orignalUrl };
    API.patch(`/${id}/`, item).then((res) => refreshWebsites());
  };

  const onDelete = (id) => {
    API.delete(`/${id}/`).then((res) => refreshWebsites());
  };

  function selectWebsite(id) {
    let item = websites.filter((site) => site.id === id)[0];
    setOrignialUrl(item.orignalUrl);
    setShortUrl(item.shortUrl);
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <h3 className="float-left">Create a new Movie</h3>
          <Form onSubmit={onSubmit} className="mt-4">
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control
                type="text"
                placeholder="Enter orignalUrl"
                value={orignalUrl}
                onChange={(e) => setOrignialUrl(e.target.value)}
              />
            </Form.Group>

            <div className="float-right">
              <Button
                variant="primary"
                type="submit"
                onClick={onSubmit}
                className="mx-2"
              >
                Save
              </Button>
              <Button
                variant="primary"
                type="button"
                onClick={() => onUpdate(siteId)}
                className="mx-2"
              >
                Update
              </Button>
            </div>
          </Form>
        </div>
        <div className="col-md-8 m">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Movie orignalUrl</th>
                <th scope="col">Genre</th>
                <th scope="col">Starring</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {websites.map((d, index) => {
                return (
                  <tr key="">
                    <th scope="row">{d.id}</th>
                    <td> {d.orignalUrl}</td>
                    <td>{d.shortUrl}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AddWebsite;
