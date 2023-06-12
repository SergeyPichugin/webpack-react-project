import { classNames } from 'shared/config/lib/classNames/classNames';
import { Loader } from 'widgets/Loader';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {className?: string;}
const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={classNames(cls.PageLoader, {}, [className])}>
        <Loader />
    </div>
);
export default PageLoader;
