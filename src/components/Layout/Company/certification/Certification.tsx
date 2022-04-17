import React, { useEffect } from 'react';
import styled from 'styled-components';
import CertificateContents from './CertificateContents';
import { ICertificationMenuType } from '@/interfaces';
import { useDispatch } from 'react-redux';
import { certificationActions } from '@/store';
import { useGetStore } from '@/hooks';

interface Iprops {
  type: ICertificationMenuType;
  clickCertificationTypeMenu: (type: ICertificationMenuType) => void;
}

const SDTCertificationLayout = styled.section`
  padding-bottom: 24px;
`;

const Certification: React.FC<Iprops> = ({
  type,
  clickCertificationTypeMenu,
}) => {
  const dispatch = useDispatch();
  const { certificationList } = useGetStore.certification();

  useEffect(() => {
    dispatch(certificationActions.getCertificationList(type));
  }, [type]);

  return (
    <SDTCertificationLayout>
      <CertificateContents
        type={type}
        certificationList={certificationList.data}
        clickCertificationTypeMenu={clickCertificationTypeMenu}
      />
    </SDTCertificationLayout>
  );
};

export default Certification;
