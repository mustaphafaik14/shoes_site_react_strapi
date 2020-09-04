import Axios from 'axios'

async function SubmitOrder({ name, total, items, stripeTokenId, userToken }) {
  const response = await Axios.post(
    '/orders',
    { name, total, items, stripeTokenId },
    {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    }
  ).catch((err) => console.log(err))
  return response
}

export default SubmitOrder
