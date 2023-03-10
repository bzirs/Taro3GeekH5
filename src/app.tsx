import { View } from '@tarojs/components'
import { memo } from 'react'

import '@/styles/index.scss'
import '@/app.scss'

const App = (props) => {
  return <View className='app'>{props.children}</View>
}

export default memo(App)
