import React, { useState } from 'react';
import clsx from 'clsx';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from 'reactstrap';

const Tab = () => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) {
      setActiveTab(active => (active = tab));
    }
  };

  return (
    <div>
      <Nav tabs className="section-detail__pills">
        <NavItem className="section-detail__pills__item">
          <NavLink
            className={clsx({ active: activeTab === '1' })}
            onClick={() => {
              toggle('1');
            }}
          >
            Đặc điểm nổi bật
          </NavLink>
        </NavItem>
        <NavItem className="section-detail__pills__item">
          <NavLink
            className={clsx({ active: activeTab === '2' })}
            onClick={() => {
              toggle('2');
            }}
          >
            Thông tin sản phẩm
          </NavLink>
        </NavItem>
        <NavItem className="section-detail__pills__item">
          <NavLink
            className={clsx({ active: activeTab === '3' })}
            onClick={() => {
              toggle('3');
            }}
          >
            Đánh giá
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab} className="section-detail__content">
        <TabPane tabId="1" className="section-detail__content__pane">
          <Row>
            <Col sm="12">
              <p className="mb-0">
                Đừng nghĩ rằng chỉ vì đôi chân to mà bạn không thể mặc được món
                đồ nào khác ngoài quần dài. Sau đây là những item vừa trendy lại
                vừa có tác dụng rất hiệu quả trong việc điều chỉnh đôi chân to
                của bạn. Mùa hè là mùa của những bộ cánh thoải mái, thoáng mát
                và hẳn cô gái nào cũng muốn khoe chân tối đa. Tuy nhiên, điều
                này lại không hề dễ dàng đối với những cô nàng sở hữu đôi chân
                to. Vậy diện đồ thế nào để vừa tạo cảm giác nhẹ nhàng nhưng lại
                khéo léo giấu được nhược điểm ấy? Sau đây, chúng tôi xin đưa ra
                gợi ý về loạt item mà các cô nàng chân to nên gắn bó trong mùa
                hè này.
              </p>
              <span>
                Mùa hè là mùa của những bộ cánh thoải mái, thoáng mát và hẳn cô
                gái nào cũng muốn khoe chân tối đa. Tuy nhiên, điều này lại
                không hề dễ dàng đối với những cô nàng sở hữu đôi chân to.Đừng
                nghĩ rằng chỉ vì đôi chân to mà bạn không thể mặc được món đồ
                nào khác ngoài quần dài. Sau đây là những item vừa trendy lại
                vừa có tác dụng rất hiệu quả trong việc điều chỉnh đôi chân to
                của bạn.
              </span>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2" className="section-detail__content__pane">
          <Row>
            <Col sm="12">
              <h4>Tab 2 Contents</h4>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3" className="section-detail__content__pane">
          <Row>
            <Col sm="12">
              <h4>Tab 3 Contents</h4>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default Tab;
