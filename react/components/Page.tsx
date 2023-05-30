import styled, { createGlobalStyle, css } from 'styled-components';

interface IPage {
	children?: React.ReactNode;
}

const GlobalStyles = createGlobalStyle`${css`
	:root {
		--red: #ff0000;
		--black: #393939;
		--grey: #3a3a3a;
		--gray: var(--grey);
		--lightGrey: #e1e1e1;
		--lightGray: var(--lightGrey);
		--offWhite: #ededed;
		--maxWidth: 1000px;
		--bs: 0 12px 24px 0 rgba(0, 0, 0, 0.09);
		--baseFontFamily: 'radnika_next', --apple-system, BlinkMacSystemFont,
			'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
			'Helvetica Neue', sans-serif;
		font-size: 10px;
	}
	html {
		box-sizing: border-box;
	}
	*,
	*::before,
	*::after {
		box-sizing: inherit;
	}
	body {
		font-family: var(--baseFontFamily);
		padding: 0;
		margin: 0;
		font-size: 1.5rem;
		line-height: 2;
	}
	a {
		text-decoration: none;
		color: var(--black);
		&:hover {
			text-decoration: underline;
		}
	}
	button {
		font-family: var(--baseFontFamily);
	}
`}`;

const InnerStyles = styled.div`
	max-width: var(--maxWidth);
	margin: 0 auto;
	padding: 2rem;
`;

function Page({ children }: IPage) {
	return (
		<div>
			<GlobalStyles />
			<InnerStyles>{children}</InnerStyles>
		</div>
	);
}

export default Page;
