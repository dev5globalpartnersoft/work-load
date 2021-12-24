import { useState, useEffect } from 'react';

// Styles
import {
  BackButton,
  BottomWrap,
  CreateProduct,
  GreenP,
  P,
  CreateRestaurant,
  WrapModal,
  LinkCreateRestaurant,
  LinkCreateProduct,
} from './style';

// UI
import { Modal as UIModal } from 'ui/Modal';

// Hooks
import { useTranslations } from 'languages/useTranslations';

export const Modal = ({ visible, setIsModalVisibleProfile, ...props }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const t = useTranslations('Modal');

  useEffect(() => {
    if (visible) {
      setIsModalVisible(visible);
      setIsModalVisibleProfile(true);
    }
  }, [visible]);

  const handleCancel = () => {
    setIsModalVisible(false);
    setIsModalVisibleProfile(false);
  };

  return (
    <UIModal {...props} visible={isModalVisible} closable={false} onCancel={handleCancel}>
      <WrapModal>
        <BackButton onClick={handleCancel}>x</BackButton>
        <GreenP>{t('Title')}</GreenP>
        <P>{t('Description')}</P>
        <BottomWrap>
          <LinkCreateRestaurant href="/add-restaurant">
            <CreateRestaurant>{t('CreateRestaurant')}</CreateRestaurant>
          </LinkCreateRestaurant>
          <LinkCreateProduct href="/add-product">
            <CreateProduct>{t('CreateProduct')}</CreateProduct>
          </LinkCreateProduct>
        </BottomWrap>
      </WrapModal>
    </UIModal>
  );
};
