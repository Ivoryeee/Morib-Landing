import { FEATURE_LIST } from '@/constants/contents';
import FeatureBlock from './FeatureBlock';
import DownloadServiceButton from './DownloadServiceSection';

const DownloadSection = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-[9rem] pb-[14.1rem] pt-[8rem]">
      <div className="tems-center flex w-[58.8rem] flex-col gap-[2rem]">
        <h1 className="self-stretch text-center text-white title-bold-72">It’s Free to Morib!</h1>
        <p className="text-center text-gray-05 title-med-32">
          Windows와 macOS에서 다운로드 받고 모립의 모든 기능을 무료로 이용하세요.
        </p>
      </div>
      <FeatureBlock featureList={FEATURE_LIST} />
      <DownloadServiceButton />
    </section>
  );
};

export default DownloadSection;
