from fastapi import APIRouter
router = APIRouter()
@router.post('/token')
def issue_token():
    return {'token': 'fed.jwt.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c', 'issued_at': '2026-04-30T11:51:00Z', 'expires_in': 3600}
@router.post('/validate')
def validate_token():
    return {'valid': True, 'subject': 'workload-a', 'provider': 'AWS', 'claims': {'role': 'admin', 'tenant': 'enterprise-1'}}
