import { classNames } from 'shared/config/lib/classNames/classNames';
import { useEffect, useState } from 'react';
import Button from 'shared/ui/Button/Button';

interface BugButtonProps {className?: string;}
export const BugButton = ({ className }: BugButtonProps) => {
    const [error, setError] = useState<boolean>(false);
    const onThrow = () => setError((prev) => !prev);
    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);
    return (
        <Button onClick={onThrow} className={classNames('', {}, [])}>
            throw Error
        </Button>
    );
};
