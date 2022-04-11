import React, { useEffect } from 'react';
import styled from 'styled-components';
import CertificateContents from './CertificateContents';
import { ICertificationMenuType } from '@/interfaces';
import { useDispatch } from 'react-redux';
import { certificationActions } from '@/store';
import { useGetStore } from '@/hooks';

interface Iprops {
  clickCertificationTypeMenu: (type: ICertificationMenuType) => void;
}

const SDTCertificationLayout = styled.section``;

const Certification: React.FC<Iprops> = ({ clickCertificationTypeMenu }) => {
  const dispatch = useDispatch();
  const { certificationList } = useGetStore.certification();

  useEffect(() => {
    dispatch(certificationActions.getCertificationList('key-certifications'));
  }, []);

  console.log('통신', certificationList);

  return (
    <SDTCertificationLayout>
      <CertificateContents
        clickCertificationTypeMenu={clickCertificationTypeMenu}
      />
    </SDTCertificationLayout>
  );
};

export default Certification;
