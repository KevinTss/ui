import Button from './index.jsx'

export default { component: Button, title: 'Button' }

export const button = () => {
  const message = 'Click here now!'

  return <Button>{message}</Button>
}
