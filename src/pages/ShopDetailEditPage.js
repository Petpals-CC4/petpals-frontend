import React, { Component } from "react";
import axios from "../utils/api.service";
import StoreBank from "../components/store-detail-edit/StoreBank";
import { Layout } from "antd";

class ShopDetailEditPage extends Component {
  state = {
    bankAccount: []
  };

  componentDidMount = async () => {
    let result = await axios.get(`/bank/${this.props.match.params.id}`);
    console.log(result.data);
    this.setState({
      bankAccount: result ? result.data : []
    });
  };

  render() {
    return (
      <Layout>
        <StoreBank bankAccounts={this.state.bankAccount} />
      </Layout>
    );
  }
}

export default ShopDetailEditPage;
