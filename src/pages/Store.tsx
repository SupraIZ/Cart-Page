
import { StoreItem } from "../components/StoreItem"
import storeItems from "../data/items.json"
import {Col, Row} from "react-bootstrap"


export function Store(){
    return (
        <>
            <h1>Store</h1>
            <Row className="g-3" md={2} xs={1} lg={3}>
                {storeItems.map(item => (
                    <Col key={item.id}>
                        <StoreItem {...item}/>
                    </Col>
                ))}
            </Row>
        </>
    )
}