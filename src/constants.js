const COMPANY_INFO = [
  { kor: '업체명', eng: 'name' },
  { kor: '사업자 번호', eng: 'num' },
  { kor: '업체 연락처', eng: 'phone' },
  { kor: '주소', eng: 'address' },
  { kor: '홈페이지', eng: 'siteUrl' },
  { kor: '대표자', eng: 'head' },
  { kor: '비고', eng: 'note' },
];
export default COMPANY_INFO;
// name: '업체명',
// num: '사업자 번호',
// phone: '업체 연락처',
// address: '주소',
// siteUrl: '홈페이지',
// head: '대표자',
// note: '비고',
export const assetInfoLeftList = [
  { name: '자산ID', value: 'name' },
  { name: '자산 구분', value: 'division' },
  { name: 'SW 카테고리', value: 'category' },
  { name: '가격', value: 'cost' },
  { name: '담당자', value: 'manager' },
];
export const assetInfoRightList = [
  { name: '등록일', value: 'date' },
  { name: '자산 태그', value: 'tag' },
  { name: '제공업체', value: 'provider' },
  { name: '버전', value: 'version' },
];
export const tagList = [
  { name: '은행' },
  { name: '보험' },
  { name: '투자' },
  { name: '캐피탈' },
  { name: '부동산' },
];
export const categoryPackageSWList = [
  { name: '시스템인프라SW' },
  { name: '응용SW' },
];
export const categoryCloudServiceList = [
  { name: 'SaaS' },
  { name: 'PaaS' },
  { name: 'IaaS' },
  { name: 'Cloud Audit & Consulting' },
  { name: 'CSB' },
];
export const versionList = [
  { name: '버전' },
  { name: '사용 가이드' },
  { name: '설치 가이드' },
  { name: '설치 파일' },
];

export const licenseSupplyList = [
  { name: '패키지 라이선스' },
  { name: 'Low Volume 라이선스' },
  { name: 'High Volume 라이선스' },
  { name: 'SaaS 라이선스' },
];
export const licensePeriodList = [
  { name: '구독 라이선스' },
  { name: '영구 라이선스' },
];
export const licenseUserList = [
  { name: '동시 사용자수 라이선스' },
  { name: '사이트 라이선스' },
  { name: '코어 라이선스' },
  { name: '1PC 1COPY 라이선스' },
];

export const contractInfoLeftList = [
  { name: '계약대상 자산', value: 'assetName' },
  { name: '시작일', value: 'startDate' },
  { name: '계약 업체', value: 'provider' },
  { name: '가격', value: 'cost' },
];
export const contractInfoRightList = [
  { name: '계약번호', value: 'contractNum' },
  { name: '종료일', value: 'endDate' },
  { name: '계약 담당자', value: 'manager' },
  { name: '등록자', value: 'registrant' },
];
