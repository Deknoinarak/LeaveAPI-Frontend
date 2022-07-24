import React, { useState } from "react";
import * as bs from "react-bootstrap";
import EnhancedTable from "./Users/Table";
import { FormModal } from "./Users/FormModal";
import * as muiIcon from "@mui/icons-material";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../components/css/all.min.css";

export const Users = () => {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => setShowForm(!showForm);

  return (
    <bs.Container className="my-3">
      <bs.Row>
        <bs.Col>
          <bs.Card>
            <bs.Card.Body className="p-4">
              <div className="mb-3">
                <h1>จัดการพนักงาน</h1>
                <bs.Button
                  variant="success"
                  className="me-3 mb-3"
                  onClick={handleShowForm}
                >
                  <muiIcon.Add className="me-1" />
                  สร้างพนักงานใหม่
                </bs.Button>
                <bs.Button variant="primary" className="me-3 mb-3">
                  <muiIcon.Search className="me-1" />
                  ค้นหาพนักงาน
                </bs.Button>
              </div>
              <EnhancedTable />
            </bs.Card.Body>
          </bs.Card>
        </bs.Col>
      </bs.Row>
      <FormModal handleShowForm={handleShowForm} showForm={showForm} />
    </bs.Container>
  );
};
