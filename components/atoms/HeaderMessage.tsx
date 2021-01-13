import { css } from '@emotion/css';
import globalCss from '../../styles/global-css';
import React from 'react';
import { useRecoilState } from 'recoil';
import { headerMessageState } from '../../recoilStates';
import { IconTimes } from './Icons';

interface HeaderMessageProps {
  allowClose?: boolean;
  children?: React.ReactElement;
  className?: string;
}

const HeaderMessage = ({
  allowClose = true,
  children,
}: HeaderMessageProps): React.ReactElement => {
  const [headerMessage, setHeaderMessageState] = useRecoilState(
    headerMessageState
  );
  const closeHandling = () => {
    setHeaderMessageState(false);
  };

  return (
    <>
      {children && headerMessage && (
        <div className={css`${cssHeaderMessage}`}>
          <div className={css`${cssContainer}`}>
            <span className={css`${cssContent}`}>{children}</span>
            {allowClose && (
              <button
                aria-label="close"
                onClick={closeHandling}
                className={css`${cssButton}`}
              >
                <IconTimes />
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderMessage;

const cssHeaderMessage = `
  position: relative;
  width: 100%;
  background-color: ${globalCss.color.primaryBrandColor};
  padding: 0.5rem 0;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  color: ${globalCss.color.black};
  z-index: 2;
`

const cssContainer = `
  max-width: ${globalCss.common.maxWidthHeader};
  display: flex;
  justify-content: center;
  align-items: center;
`

const cssContent = `
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.1rem;
  padding: 0 5vw;
  text-align: center;

  a {
    color: ${globalCss.color.black};
    border-bottom: none;
    text-decoration: none;
    font-weight: ${globalCss.common.fontBold};
  }
`;

const cssButton = `
  color: ${globalCss.color.black};
  background-color: transparent;
  position: absolute;
  right: 1.5rem;
  border: none;
  cursor: pointer;

  svg {
    vertical-align: middle;
  }
`;