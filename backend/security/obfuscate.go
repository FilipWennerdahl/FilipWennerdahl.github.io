package security

import (
	"encoding/base64"

	"golang.org/x/crypto/scrypt"
)

func GetObfuscatedString(s string) (string, error) {
	id, err := scrypt.Key([]byte(s), []byte(SALT), 32768, 8, 1, 32)
	if err != nil {
		return "", err
	}

	return base64.URLEncoding.EncodeToString(id), nil
}
