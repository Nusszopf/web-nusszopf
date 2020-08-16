import React from 'react'
import { Text, TEXT_TYPE } from '../atoms'

export default {
  title: 'Atoms/Text',
  component: Text,
}

export const Title_LG = () => <Text type={TEXT_TYPE.titleLg}>Large Title</Text>
export const Title_MD = () => <Text type={TEXT_TYPE.titleMd}>Medium Title</Text>
export const Title_SM = () => <Text type={TEXT_TYPE.titleSm}>Small Title</Text>
export const Subtitle_LG = () => <Text type={TEXT_TYPE.subtitleLg}>Large Subtitle</Text>
export const Text_LG = () => <Text type={TEXT_TYPE.textLg}>Large Text</Text>
export const Text_MD = () => <Text type={TEXT_TYPE.textMd}>Medium Text</Text>
export const Text_SM = () => <Text type={TEXT_TYPE.textSm}>Small Text</Text>
