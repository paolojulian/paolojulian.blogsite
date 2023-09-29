import { fireEvent, render } from '@testing-library/react';
import * as searchProvider from '../../context/search-provider';
import GlobalSearchModalSearchBar from './global-search-modal-search-bar';
import DATA_TEST from './global-search-modal-search-bar.constants';

// Mock functions used
jest.mock('../../context/search-provider');

// Spy on mocked functions
const mockedSetKeyword = jest.fn();
const mockedKeyword = 'Testing';
jest.spyOn(searchProvider, 'useAlgoliaSearch').mockReturnValue({
  data: [],
  keyword: mockedKeyword,
  setKeyword: mockedSetKeyword,
  isError: false,
  isLoading: false,
});

describe('TESTING GlobalSearchModalSearchBar component', () => {
  describe('GIVEN a keyword and onEsc callback', () => {
    function renderComponent() {
      return render(<GlobalSearchModalSearchBar onEsc={() => {}} />);
    }

    describe('WHEN the component is rendered for snapshot testing', () => {
      it('THEN it should match the snapshot', () => {
        const { asFragment } = renderComponent();
        expect(asFragment()).toMatchSnapshot();
      });
    });

    describe('WHEN the component is rendered', () => {
      it('THEN it should render the search bar', () => {
        const { getByTestId } = renderComponent();
        const searchBar = getByTestId(DATA_TEST.container);
        expect(searchBar).toBeInTheDocument();
      });

      it('THEN it should initially display the provided keyword', () => {
        const { getByTestId } = renderComponent();
        const searchBar = getByTestId(DATA_TEST.container);
        expect(searchBar).toHaveValue(mockedKeyword);
      });

      it('THEN it should call setKeyword when input changes', () => {
        const { getByTestId } = renderComponent();
        const searchBar = getByTestId(DATA_TEST.container);
        fireEvent.change(searchBar, { target: { value: 'New Keyword' } });
        expect(mockedSetKeyword).toHaveBeenCalledWith('New Keyword');
      });
    });

    describe('WHEN the esc is clicked', () => {
      it('THEN it should call the handleEscape function', () => {
        const handleEscape = jest.fn();
        const { getByTestId } = render(
          <GlobalSearchModalSearchBar onEsc={handleEscape} />
        );
        const searchBar = getByTestId(DATA_TEST.escapeBtn);
        fireEvent.click(searchBar);
        expect(handleEscape).toBeCalledTimes(1);
      });
    });
  });
});
