import { Col, Row, Skeleton, Space } from 'antd';
import React from 'react';


const SkeletonHomeReg: React.FC = () => {

     return (
          <div style={{

               width: '100%',
               height: '70vh',
          }}>

               <div style={{
                    margin: "36px 0"

               }}>
                    <Skeleton />
               </div>

               <div
                    className="form-bg"
               >

                    <Row gutter={{ xs: 24, sm: 16, md: 24, lg: 32 }}>
                         <Col xs={24} sm={12} md={8} lg={6} style={{ marginBottom: "16px" }}>
                              <Space>
                                   <Skeleton.Input active={true} />
                              </Space>
                         </Col>
                         <Col xs={24} sm={12} md={8} lg={6} style={{ marginBottom: "16px" }}>
                              <Space>
                                   <Skeleton.Input active={true} />
                              </Space>
                         </Col>
                         <Col xs={24} sm={12} md={8} lg={6} style={{ marginBottom: "16px" }}>
                              <Space>
                                   <Skeleton.Input active={true} />
                              </Space>
                         </Col>

                         <Col xs={24} sm={12} md={8} lg={6} style={{ marginBottom: "16px" }}>
                              <Space>
                                   <Skeleton.Input active={true} />
                              </Space>
                         </Col>
                         <Col xs={24} sm={12} md={8} lg={6} style={{ marginBottom: "16px" }}>
                              <Space>
                                   <Skeleton.Input active={true} />
                              </Space>
                         </Col>
                         <Col xs={24} sm={12} md={8} lg={6} style={{ marginBottom: "16px" }}>
                              <Space>
                                   <Skeleton.Input active={true} />
                              </Space>
                         </Col>
                         <Col xs={24} sm={12} md={8} lg={6} style={{ marginBottom: "16px" }}>
                              <Space>
                                   <Skeleton.Input active={true} />
                              </Space>
                         </Col>
                         <Col xs={24} sm={12} md={8} lg={6} style={{ marginBottom: "16px" }}>
                              <Space>
                                   <Skeleton.Input active={true} />
                              </Space>
                         </Col>

                    </Row>
               </div>

               <div
                    className="form-bg"
               >

                    <Row gutter={{ xs: 24, sm: 16, md: 24, lg: 32 }}>
                         <Col xs={24} sm={12} md={8} lg={6} style={{ marginBottom: "16px" }}>
                              <Space>
                                   <Skeleton.Image active={true} />
                              </Space>
                         </Col>
                         <Col xs={24} sm={12} md={8} lg={6} style={{ marginBottom: "16px" }}>
                              <Space>
                                   <Skeleton.Input active={true} />
                              </Space>
                         </Col>
                         <Col xs={24} sm={12} md={8} lg={6} style={{ marginBottom: "16px" }}>
                              <Space>
                                   <Skeleton.Input active={true} />
                              </Space>
                         </Col>
                         <Col xs={24} sm={12} md={8} lg={6} style={{ marginBottom: "16px" }}>
                              <Space>
                                   <Skeleton.Input active={true} />
                              </Space>
                         </Col>
                         <Col xs={24} sm={12} md={8} lg={6} style={{ marginBottom: "16px" }}>
                              <Space>
                                   <Skeleton.Input active={true} />
                              </Space>
                         </Col>

                         <Col xs={24} sm={12} md={8} lg={6} style={{ marginBottom: "16px" }}>
                              <Space>
                                   <Skeleton.Input active={true} />
                              </Space>
                         </Col>
                         <Col xs={24} sm={12} md={8} lg={6} style={{ marginBottom: "16px" }}>
                              <Space>
                                   <Skeleton.Input active={true} />
                              </Space>
                         </Col>
                         <Col xs={24} sm={12} md={8} lg={6} style={{ marginBottom: "16px" }}>
                              <Space>
                                   <Skeleton.Input active={true} />
                              </Space>
                         </Col>

                    </Row>
               </div>
               <Space>
                    <Skeleton.Button active={true} />
               </Space>


          </div>
     );
};

export default SkeletonHomeReg;