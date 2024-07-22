import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation, useParams } from 'react-router-dom';
import { StatusContext, StatusProvider } from '../components/Context'; // Ensure the path is correct
import { CookiesProvider } from 'react-cookie';
import { Paper, Table, TableContainer, Stack, TableHead, TableRow, TableCell, Container, Typography, Box, Button, Fab, Tooltip, TableBody } from '@mui/material';
import { ArrowForward, Error, Help, Loop, Cached, FileCopy } from '@mui/icons-material';
import axios from 'axios';

const App = () => {
  const location = useLocation();

  const { setStatus, cookies, setCookie, removeCookie, status } = useContext(StatusContext);
  const { id } = useParams();

  const [messageStatus, setMessageStatus] = useState({
    message: { body: null, date: null, from: null, htmlBody: null, id: null, subject: null, textBody: null, attachments: [] },
    error: false,
    loading: false
  });

  useEffect(() => {
    if (!cookies.email) {
      const getEmail = async () => {
        await axios.get('https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1')
          .then(res => {
            setCookie('email', res.data[0]);
            setCookie('name', res.data[0].split('@')[0]);
            setCookie('provider', res.data[0].split('@')[1]);
          })
          .catch(err => {
            console.log(err);
          });
      };
      getEmail();
    }
  }, [cookies, setCookie]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStatus(status => ({ data: status.data, error: false, loading: true }));
      if (cookies.name && cookies.provider) {
        const fetchMessages = async () => {
          await axios.get(`https://www.1secmail.com/api/v1/?action=getMessages&login=${cookies.name}&domain=${cookies.provider}`)
            .then(res => {
              setStatus({ data: res.data, error: false, loading: false });
            })
            .catch(err => {
              setStatus({ data: null, error: true, loading: false });
              console.log(err);
            });
        };
        fetchMessages();
      }
    }, 10000);
    return () => clearInterval(interval);
  }, [cookies, setStatus]);

  useEffect(() => {
    if (id) {
      const getMessage = async () => {
        setMessageStatus(status => ({ message: status.message, error: false, loading: true }));
        await axios.get(`https://www.1secmail.com/api/v1/?action=readMessage&login=${cookies.name}&domain=${cookies.provider}&id=${id}`)
          .then(res => {
            setMessageStatus({ message: res.data, error: false, loading: false });
          })
          .catch(err => {
            setMessageStatus({ message: null, error: true, loading: false });
            console.log(err);
          });
      };
      getMessage();
    }
  }, [id, cookies.name, cookies.provider]);

  const handleCopy = () => {
    navigator.clipboard.writeText(cookies.email);
  };

  const handleRemove = () => {
    removeCookie("email");
  };

  return (
    <CookiesProvider>
      <StatusProvider>
        <Router>
          <Box boxShadow={2} width="100%" component="header" aria-label="header" style={{ padding: '1rem', background: '#fff' }}>
            <Container component="nav" aria-label="nav bar">
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <h1 aria-label="page name">dMail</h1>
                <Stack direction="row" spacing={3} aria-label="page routes">
                  <Link to="/" style={{ textDecoration: 'none' }}>
                    <Button variant={location.pathname === '/' ? 'contained' : 'outlined'}>Disposable Email</Button>
                  </Link>
                  <Link to="/password" style={{ textDecoration: 'none' }}>
                    <Button variant={location.pathname === '/password' ? 'contained' : 'outlined'}>Password Generator</Button>
                  </Link>
                </Stack>
              </Box>
            </Container>
          </Box>

          <Routes>
            <Route path="/" element={
              <>
                <Container component="section">
                  <Box display="flex" flexDirection="column" alignItems="center">
                    <Box paddingX={6} paddingY={4} textAlign="center" border="1px dashed black" width={{ xs: '90%', md: '75%', lg: '50%' }} marginTop={8} aria-label="email address widget">
                      <Typography fontFamily="monospace">Your disposable Email address: </Typography>
                      <Stack direction="row" spacing={1} justifyContent="center" alignItems="center" marginY={2}>
                        <Box>
                          <Typography variant="h4" fontWeight="bold">
                            {cookies.email ? cookies.email : 'Loading...'}
                          </Typography>
                        </Box>
                        <Tooltip title="Copy to clipboard" placement="top" arrow>
                          <Fab color="primary" onClick={handleCopy} aria-label="copy button"><FileCopy fontSize="small" /></Fab>
                        </Tooltip>
                        <Tooltip title="Generate new email" placement="top" arrow>
                          <Fab color="secondary" onClick={handleRemove} aria-label="new email button"><Cached fontSize="small" /></Fab>
                        </Tooltip>
                      </Stack>
                    </Box>
                    <Box padding={2} textAlign="center" width={{ xs: '75%', md: '50%', lg: '40%' }}>
                      <Typography variant="caption" fontFamily="monospace" aria-label="description">
                        Forget about spam, advertising mailings, hacking and attacking robots. Keep your real mailbox clean and secure. Temp Mail provides temporary, secure, anonymous, free, disposable email address.
                      </Typography>
                    </Box>
                  </Box>
                </Container>

                <Container maxWidth="md" style={{ marginTop: '2rem', marginBottom: '2rem' }}>
                  <Typography variant="h3" fontWeight="bold" textAlign="center" marginY={3}>Your Inbox</Typography>
                  <TableContainer component={Paper} style={{ borderRadius: '16px' }}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell style={{ backgroundColor: 'black', color: 'white', fontSize: '18px' }}>From</TableCell>
                          <TableCell style={{ backgroundColor: 'black', color: 'white', fontSize: '18px' }}>Subject</TableCell>
                          <TableCell style={{ backgroundColor: 'black', color: 'white', fontSize: '18px' }} align="right">View</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {
                          status.loading ?
                            <TableRow><TableCell colSpan={3}>
                              <Stack direction="row" spacing={1} alignItems="center">
                                <Loop />
                                <Typography color="black" fontWeight="bold"> Loading...</Typography>
                              </Stack>
                            </TableCell></TableRow>
                            : status.error ?
                              <TableRow><TableCell colSpan={3}>
                                <Stack direction="row" spacing={1} alignItems="center">
                                  <Error color="error" />
                                  <Typography color="red" fontWeight="bold"> An Error Occurred</Typography>
                                </Stack>
                              </TableCell></TableRow>
                              : status.data.length > 0 ?
                                status.data.map((data, i) => (
                                  <TableRow key={i}>
                                    <TableCell align="left"><Typography fontWeight="bold">{data.from}</Typography></TableCell>
                                    <TableCell align="left">{data.subject}</TableCell>
                                    <TableCell align="right"><Link to={`/message/${data.id}`}><ArrowForward color="primary" /></Link></TableCell>
                                  </TableRow>
                                )) :
                                <TableRow><TableCell colSpan={3}>
                                  <Stack direction="row" spacing={1} alignItems="center">
                                    <Help color="disabled" />
                                    <Typography color="gray" fontWeight="bold">No emails found</Typography>
                                  </Stack>
                                </TableCell></TableRow>
                        }
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Container>
              </>
            } />

            <Route path="/message/:id" element={
              <Container maxWidth="md" style={{ marginTop: '2rem', marginBottom: '2rem' }}>
                <Typography variant="h3" fontWeight="bold" textAlign="center" marginY={3}>Email Details</Typography>
                {messageStatus.loading ?
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Loop />
                    <Typography color="black" fontWeight="bold"> Loading...</Typography>
                  </Stack>
                  : messageStatus.error ?
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Error color="error" />
                      <Typography color="red" fontWeight="bold"> An Error Occurred</Typography>
                    </Stack>
                    : <>
                      <Typography variant="h5" fontWeight="bold">{messageStatus.message.subject}</Typography>
                      <Typography variant="subtitle1">{messageStatus.message.from} - {messageStatus.message.date}</Typography>
                      <Box marginY={3}>
                        <Typography variant="body1">{messageStatus.message.textBody}</Typography>
                        {messageStatus.message.htmlBody && <div dangerouslySetInnerHTML={{ __html: messageStatus.message.htmlBody }} />}
                      </Box>
                    </>
                }
              </Container>
            } />

            <Route path="/password" element={
              <Container maxWidth="md" style={{ marginTop: '2rem', marginBottom: '2rem' }}>
                {/* Add your Password component content here */}
              </Container>
            } />
          </Routes>
        </Router>
      </StatusProvider>
    </CookiesProvider>
  );
};

export default App;
