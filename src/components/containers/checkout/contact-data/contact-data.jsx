import React from 'react';
import Button from '../../../ui/button/button.component';
import './contact-data.css';
import axios from '../../../../axios-orders';
import Spinner from '../../../ui/spinner/spinner';

class ContactData extends React.Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: '',
    },
    loading: false,
  };

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Todor',
        address: {
          street: 'Sthn 1',
          zipCode: '5300',
          country: 'Bulgaria',
        },
        email: 'test@test.com',
      },
      deliveryMethod: 'fastest',
    };
    axios
      .post('/orders.json', order)
      .then((response) => {
        this.setState({ loading: false });
        this.props.history.push('/');
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
  };

  render() {
    let form = (
      <form>
        <input type='text' name='name' placeholder='Your name' />
        <input type='email' name='email' placeholder='Your email' />
        <input type='text' name='street' placeholder='Your street' />
        <input type='text' name='postal' placeholder='Your postal code' />
        <Button btnType='Success' clicked={this.orderHandler}>
          Order
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className='contact-data'>
        <h4>Enter your Contact data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
