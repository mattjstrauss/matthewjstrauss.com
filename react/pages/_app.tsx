import type { AppProps, AppInitialProps } from 'next/app';
import {
	ApolloProvider,
	ApolloClient,
	NormalizedCacheObject,
} from '@apollo/client';

import { client } from '../lib/apollo';

import Page from '../components/Page';
export interface IApolloProps extends AppProps {
	apollo?: ApolloClient<NormalizedCacheObject> | any;
}
function App({ Component, pageProps }: IApolloProps) {
	return (
		<ApolloProvider client={client}>
			<Page>
				<Component {...pageProps} />
			</Page>
		</ApolloProvider>
	);
}

export default App;

// // @ts-ignore
// App.getInitialProps = async function ({ Component, ctx }) {
// 	let pageProps: AppInitialProps | any = {};
// 	if (Component.getInitialProps) {
// 		pageProps = await Component.getInitialProps(ctx);
// 	}
// 	pageProps.query = ctx.query;
// 	return { pageProps };
// };
// // @ts-ignore
// export default withData(App);
