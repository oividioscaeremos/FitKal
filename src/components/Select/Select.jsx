import React from 'react';
import PropTypes from 'prop-types';

import { Select as AntSelect, Icon } from 'antd';
import { withTooltip } from '../../hoc';

const Select = React.forwardRef(({ children, options, ...otherProps }, ref) => (
  <AntSelect
    style={{ width: '100%' }}
    ref={ref}
    allowClear
    clearIcon={<Icon type="close" style={{ fontSize: '15px' }} />}
    filterOption={(inputValue, option) =>
      option.props.children
        .toString()
        .toLocaleLowerCase('tr')
        .indexOf(inputValue.toLocaleLowerCase('tr')) !== -1
    }
    showArrow={false}
    showSearch
    {...otherProps}
  >
    {options}
  </AntSelect>
));

Select.propTypes = {
  options: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

Select.defaultProps = {};

export default withTooltip(Select);
