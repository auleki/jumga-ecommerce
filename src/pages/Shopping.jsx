import React from 'react'
import {
  Page,
  JustifiedRow,
  SubHeader,
  GapedRow,
  HeaderTitle,
  ProductGrid,
  JustifiedRowCenter,
  CrumbHeader
} from "../components/styledComponents";
import { footWears } from "../services/utilities";
import ProductCard from '../components/ProductCard'

const Shopping = () => {


  return (
    <Page>
      <div className="full_screen">
        <JustifiedRowCenter>
          <div>
            <SubHeader>Shopping</SubHeader> /<CrumbHeader> Products</CrumbHeader>
          </div>
          <div>
            <HeaderTitle>Shop</HeaderTitle>
          </div>
          <GapedRow>
            <p>Showing 1 of 32 Results</p>
            <select name="" id="">
              <option value="">Select filter</option>
              <option value="">Filter one</option>
              <option value="">Filter two</option>
            </select>
          </GapedRow>
        </JustifiedRowCenter>
        <ProductGrid>
          {footWears.map((shoe, i) => <ProductCard key={i} footWear={shoe} />)}
        </ProductGrid>
      </div>

    </Page>
  )
}

export default Shopping