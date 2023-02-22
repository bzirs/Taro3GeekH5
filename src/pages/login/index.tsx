import { View } from '@tarojs/components'
import { AtButton } from 'taro-ui'

const Login = () => {
  const handleClick = () => {
    console.log(11111)
  }
  return (
    <View>
      登录
      <AtButton type='primary' onClick={handleClick}>
        按钮文案
      </AtButton>
    </View>
  )
}
export default Login
