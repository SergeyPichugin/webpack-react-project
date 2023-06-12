import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvaider } from 'app/provaiders/ThemeProvaider';
import App from 'app/App';

import 'shared/config/i18n/i18n';
import { ErrorBoundary } from 'app/provaiders/ErrorBoundary';

render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvaider>
                <App />
            </ThemeProvaider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById('root'),
);
