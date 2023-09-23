import { COLOR_VARIANTS, DATA_TEST } from './text-input.constants';
import TextInput from './text-input';
import { render, screen } from '@testing-library/react';

type TextInputProps = React.ComponentProps<typeof TextInput>;

describe('TESTING TextInput Component', () => {
  describe('GIVEN a TextInput component with variant and isError prop', () => {
    const defaultProps: Partial<TextInputProps> = {
      variant: 'default',
      isError: false,
    };

    function renderComponent(props: TextInputProps) {
      render(<TextInput {...props} />);
    }

    describe('WHEN the TextInput Component is rendered', () => {
      beforeEach(() => {
        renderComponent(defaultProps);
      });

      it('THEN it should match the snapshot', () => {
        const { asFragment } = render(<TextInput {...defaultProps} />);
        expect(asFragment()).toMatchSnapshot();
      });

      it('THEN it should render the component', () => {
        const input = screen.getByTestId(DATA_TEST.container);
        expect(input).toBeInTheDocument();
      });

      it('THEN it should apply the default variant styles', () => {
        const input = screen.getByTestId(DATA_TEST.container);
        expect(input).toHaveClass(COLOR_VARIANTS.default);
      });

      it('THEN it should not apply error styles', () => {
        const input = screen.getByTestId(DATA_TEST.container);
        expect(input).not.toHaveClass('border-red-500');
      });
    });

    describe('WHEN the TextInput Component has different variant', () => {
      beforeEach(() => {
        renderComponent({ ...defaultProps, variant: 'default-dark' });
      });

      it('THEN it should apply the default-dark variant style', () => {
        const input = screen.getByTestId(DATA_TEST.container);
        expect(input).toHaveClass(COLOR_VARIANTS['default-dark']);
      });
    });

    describe('WHEN the TextInput Component has isError set to true', () => {
      beforeEach(() => {
        renderComponent({ ...defaultProps, isError: true });
      });

      it('THEN it should apply the error styles', () => {
        const input = screen.getByTestId(DATA_TEST.container);
        expect(input).toHaveClass('border-red-500');
      });
    });
  });
});
