import { render, fireEvent } from '@testing-library/react';
import FilterDoubleSlider from '../FilterDoubleSlider';

describe('FilterDoubleSlider', () => {
  const mockSetFilter = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders correctly with initial values', () => {
    const { getByText, queryAllByRole } = render(
      <FilterDoubleSlider
        filter={[10, 20]}
        setFilter={mockSetFilter}
        minNumber={0}
        maxNumber={100}
      />
    );

    expect(getByText('$0')).toBeInTheDocument();
    expect(getByText('$100')).toBeInTheDocument();

    const sliders = queryAllByRole('slider');
    const slider = sliders[0]; // Select the first slider element

    expect(slider).toHaveAttribute('min', '0');
    expect(slider).toHaveAttribute('max', '100');
    expect(slider).toHaveAttribute('value', '10,20');
  });

  test('handles slider value change correctly for single value', () => {
    const { queryAllByRole } = render(
      <FilterDoubleSlider
        filter={[10, 20]}
        setFilter={mockSetFilter}
        minNumber={0}
        maxNumber={100}
      />
    );

    const sliders = queryAllByRole('slider');
    const slider = sliders[0]; // Select the first slider element

    fireEvent.change(slider, { target: { value: '30' } });

    expect(mockSetFilter).toHaveBeenCalledTimes(1);
    expect(mockSetFilter).toHaveBeenCalledWith([30, 30]);
  });

  test('handles slider value change correctly for range', () => {
    const { queryAllByRole } = render(
      <FilterDoubleSlider
        filter={[10, 20]}
        setFilter={mockSetFilter}
        minNumber={0}
        maxNumber={100}
      />
    );

    const sliders = queryAllByRole('slider');
    const slider = sliders[0]; // Select the first slider element

    fireEvent.change(slider, { target: { value: '30,60' } });

    expect(mockSetFilter).toHaveBeenCalledTimes(1);
    expect(mockSetFilter).toHaveBeenCalledWith([30, 60]);
  });
});
