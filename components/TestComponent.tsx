import { useTranslation } from 'next-i18next'
import type { FC } from 'react'

type Props = {}

export const TestComponent: FC<Props> = () => {
  const { t, ready } = useTranslation('second-page');

  return <div>{ready ? t('title') : 'Loading...'}</div>
}
